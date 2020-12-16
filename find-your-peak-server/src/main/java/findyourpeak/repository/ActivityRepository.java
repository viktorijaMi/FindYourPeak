package findyourpeak.repository;

import findyourpeak.model.Activity;
import findyourpeak.model.enumerator.TypeActivity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ActivityRepository extends JpaRepository<Activity, Long> {
    Optional<Activity> findActivityByType(TypeActivity type);
}
