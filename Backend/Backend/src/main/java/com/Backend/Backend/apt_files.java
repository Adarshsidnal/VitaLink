package com.Backend.Backend;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "apk_files")
public class apt_files {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="ID")
    private int id;

    @Column(name = "file_name", length = 255)
    private String fileName;

    @Lob
    @Column(name = "file_data")
    private byte[] fileData;
}
