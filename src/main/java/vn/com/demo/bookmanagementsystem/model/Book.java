package vn.com.demo.bookmanagementsystem.model;


import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Book {
    private long id;
    private String title;
    private String author;
    private String category;
    private int publicationYear;
    private String publisher;
    private String description;
    private String isbn;
    private int quantity;
    private String coverImage;
    private String location;
    private LocalDate dateAdded;
    private BookStatus status;
}
