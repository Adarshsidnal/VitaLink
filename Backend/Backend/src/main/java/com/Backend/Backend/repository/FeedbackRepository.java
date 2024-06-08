package com.Backend.Backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.Backend.Backend.model.Feedback;

public interface FeedbackRepository extends JpaRepository<Feedback, Long> {

}