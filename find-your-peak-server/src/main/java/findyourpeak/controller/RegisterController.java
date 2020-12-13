package findyourpeak.controller;

import findyourpeak.model.User;
import findyourpeak.repository.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/")
public class RegisterController {

    private final UserRepository userRepository;

    public RegisterController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/register")
    //TODO: Check with the front end if it gives me a whole User or just the parametars
    public ResponseEntity<User> register(@RequestParam String firstName,
                                         @RequestParam String lastName,
                                         @RequestParam String username,
                                         @RequestParam String email,
                                         @RequestParam String password,
                                         @RequestParam String repeatedPassword
                                         )
    {
        // TODO: Check with the login controller what to do with the password and how to encrypt it
        User user = this.userRepository.save(new User(firstName, lastName, username, email));
        return ResponseEntity.ok(user);
    }

}
