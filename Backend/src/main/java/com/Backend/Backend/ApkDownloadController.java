package com.Backend.Backend;

import org.springframework.core.io.InputStreamResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;

@RestController
public class ApkDownloadController {

    private static final String APK_FILE_PATH = "C:\\Users\\Hp\\Downloads\\Backend\\Backend\\src\\main\\resources\\hummigo_final.apk";

    @GetMapping("/download")
    public ResponseEntity<Resource> downloadApk() throws IOException {
        // Read the APK file
        File file = new File(APK_FILE_PATH);
        InputStreamResource resource = new InputStreamResource(new FileInputStream(file));

        // Set up HTTP headers
        HttpHeaders headers = new HttpHeaders();
        headers.add(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=" + file.getName());
        headers.add(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_OCTET_STREAM_VALUE);
        headers.add(HttpHeaders.CONTENT_LENGTH, String.valueOf(file.length()));

        // Return the file as a response
        return ResponseEntity.ok()
                .headers(headers)
                .body(resource);
    }
}
