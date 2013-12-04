package fr.cl2.visualmgmt.board;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.ArrayList;
import java.util.List;

@SuppressWarnings("serial")
@Entity
public class Column {

    @Id
    @GeneratedValue
    private Long id;

    private String title;

    private String description;

    private List<ServiceClass> serviceClasses;

    public Long getId() {
        return id;
    }

    public String getTitle() {

        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<ServiceClass> getServiceClasses() {
        return serviceClasses;
    }

    public Column(String title, String description) {
        this.title = title;
        this.description = description;
        this.serviceClasses = new ArrayList<>();

    }
}
