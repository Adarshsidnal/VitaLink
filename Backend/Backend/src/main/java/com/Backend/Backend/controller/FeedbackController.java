package com.Backend.Backend.controller;

import com.Backend.Backend.model.Feedback;
import com.Backend.Backend.repository.FeedbackRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/feedback")
@CrossOrigin(origins = "http://localhost:3000") 
public class FeedbackController {
    @Autowired
    private FeedbackRepository feedbackRepository;

    @PostMapping
    public Feedback submitFeedback(@RequestBody Feedback feedback) {
        return feedbackRepository.save(feedback);
    }
}
