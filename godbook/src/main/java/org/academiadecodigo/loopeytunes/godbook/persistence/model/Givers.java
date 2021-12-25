package org.academiadecodigo.loopeytunes.godbook.persistence.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "givers")
@Getter
@Setter
public class Givers {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private int phoneNumber;
    private String email;
    private String aboutMe;
    private String imgUrl;
    private Category category;
    private String skills;
    private String experiences;
    private String location;
    private int age;
    @Column(unique = true)
    private String username;
    private String password;

    public Givers() {}

    @Override
    public String toString() {
        return "Givers{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", phoneNumber='" + phoneNumber + '\'' +
                ", email='" + email + '\'' +
                ", aboutMe='" + aboutMe + '\'' +
                ", imgUrl='" + imgUrl + '\'' +
                ", skills=" + skills +
                ", experiences=" + experiences +
                ", location='" + location + '\'' +
                ", age=" + age +
                '}';
    }


}
