package findyourpeak;

import findyourpeak.model.User;
import findyourpeak.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javax.annotation.PostConstruct;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@SpringBootApplication
public class FindYourPeakApplication {

    @Autowired
    private UserRepository repository;

    @PostConstruct
    public void initUsers() {
        List<User> users = Stream.of(
                new User(101,"javatechie","password","javatechie@yahoo.com"),
                new User(102,"user1","password","user1@yahoo.com"),
                new User(103,"user2","password","user2@yahoo.com"),
                new User( 104,"user3","password","user3@yahoo.com")
                ).collect(Collectors.toList());
        repository.saveAll(users);
    }

    public static void main(String[] args) {
        SpringApplication.run(FindYourPeakApplication.class, args);
    }

}
