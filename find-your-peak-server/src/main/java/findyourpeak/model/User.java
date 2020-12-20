package findyourpeak.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "users")
public class User {

    @Id
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "username")
    private String username;

    @Column(name = "password")
    private String password;

    @Column(name = "email")
    private String email;

    public User(int id,String username,String password, String email) {
        this.id=id;
        this.username = username;
        this.email = email;
        this.password = password;
    }

    public User() {}
}
