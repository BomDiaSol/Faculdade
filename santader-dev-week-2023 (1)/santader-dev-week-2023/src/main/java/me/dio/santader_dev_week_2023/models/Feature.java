package me.dio.santader_dev_week_2023.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity (name = "tb_feature")
public class Feature {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String icon;
    private String description;

    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
    public String getIcon() {
        return icon;
    }
    public void setIcon(String icon) {
        this.icon = icon;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
}
