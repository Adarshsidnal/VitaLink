import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;

import javax.annotation.PostConstruct;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

@SpringBootApplication
@RestController
public class feedback {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public static void main(String[] args) {
        SpringApplication.run(feedback.class, args);
    }

    @PostConstruct
    public void init() {
        jdbcTemplate.execute("CREATE TABLE IF NOT EXISTS feedback (id SERIAL PRIMARY KEY, name VARCHAR(255), email VARCHAR(255), feedback TEXT)");
    }

    @GetMapping("/api/feedback")
    public ResponseEntity<List<Feedback>> getFeedback() {
        List<Feedback> feedbackList = jdbcTemplate.query("SELECT * FROM feedback", new FeedbackRowMapper());
        return ResponseEntity.ok(feedbackList);
    }

    @PostMapping("/api/feedback")
    public ResponseEntity<String> submitFeedback(@RequestBody Feedback feedback) {
        try {
            jdbcTemplate.update("INSERT INTO feedback (name, email, feedback) VALUES (?, ?, ?)", feedback.getName(), feedback.getEmail(), feedback.getFeedback());
            return ResponseEntity.status(HttpStatus.CREATED).body("Feedback submitted successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    private static class FeedbackRowMapper implements RowMapper<Feedback> {
        @Override
        public Feedback mapRow(ResultSet rs, int rowNum) throws SQLException {
            Feedback feedback = new Feedback();
            feedback.setId(rs.getLong("id"));
            feedback.setName(rs.getString("name"));
            feedback.setEmail(rs.getString("email"));
            feedback.setFeedback(rs.getString("feedback"));
            return feedback;
        }
    }
}
