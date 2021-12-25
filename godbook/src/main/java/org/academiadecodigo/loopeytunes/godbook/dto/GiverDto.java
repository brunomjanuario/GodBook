package org.academiadecodigo.loopeytunes.godbook.dto;

import lombok.Getter;
import lombok.Setter;
import org.academiadecodigo.loopeytunes.godbook.persistence.model.Category;
import javax.validation.constraints.*;

@Getter
@Setter
public class GiverDto {

    private int id;

    @NotNull(message = "name is mandatory.")
    @NotBlank(message = "name is mandatory.")
    @Size(min = 3, max = 25, message = "Minimum of 3 characters, maximum of 25.")
    private String name;

    @Pattern(regexp = "^[0-9]+$", message = "phone has invalid characters.")
    @Size(min = 9, max = 9, message = "phone number must have 9 digits.")
    private int phoneNumber;

    @NotNull(message = "email is mandatory.")
    @NotBlank(message = "email is mandatory.")
    @Email(message = "not a valid email format.")
    private String email;

    @NotNull(message = "aboutMe is mandatory.")
    @NotBlank(message = "aboutMe is mandatory.")
    @Size(max = 600, message = "Maximum of 600")
    private String aboutMe;

    private String imgUrl;

    @NotNull(message = "category is mandatory.")
    @NotBlank(message = "category is mandatory.")
    private Category category;

    private String skills;

    @NotNull(message = "experiences is mandatory.")
    @NotBlank(message = "experiences is mandatory.")
    @Size(max = 200, message = "Maximum of 200")
    private String experiences;

    @NotNull(message = "location is mandatory.")
    @NotBlank(message = "location is mandatory.")
    @Size(max = 30, message = "Maximum of 30")
    private String location;

    @NotNull(message = "location is mandatory.")
    @NotBlank(message = "location is mandatory.")
    @Min(18)
    private int age;

    @NotNull(message = "username is mandatory.")
    @NotBlank(message = "username is mandatory.")
    @Size(max = 30, message = "Maximum of 30")
    private String username;

    @NotNull(message = "password is mandatory.")
    @NotBlank(message = "password is mandatory.")
    @Size(max = 30, message = "Maximum of 30")
    private String password;

    @Override
    public String toString() {
        return "GiverDto{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", phoneNumber=" + phoneNumber +
                ", email='" + email + '\'' +
                ", aboutMe='" + aboutMe + '\'' +
                ", imgUrl='" + imgUrl + '\'' +
                ", category=" + category +
                ", skills='" + skills + '\'' +
                ", experiences='" + experiences + '\'' +
                ", location='" + location + '\'' +
                ", age=" + age +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
