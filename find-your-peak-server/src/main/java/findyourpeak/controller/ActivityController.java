package findyourpeak.controller;

import findyourpeak.model.Activity;
import findyourpeak.repository.ActivityRepository;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/")
public class ActivityController {

    private final ActivityRepository activityRepository;

    public ActivityController(ActivityRepository activityRepository) {
        this.activityRepository = activityRepository;
    }

    @GetMapping("/activities")
    public List<Activity> getAllActivities() {
        return this.activityRepository
                .findAll();
    }

    @PostMapping("/activities") //TODO this doesnt seem to work.
    public Activity addActivity(@RequestBody Activity activity) {
        return this.activityRepository
                .save(activity);
    }

    @GetMapping("/activities/{id}")
    public ResponseEntity<Activity> getActivityById(@PathVariable Long id) {
        Activity activity = this.activityRepository
                .findById(id)
                .orElseThrow(() ->
                    new ResourceNotFoundException("#" + id + " activity not found")
                );
        return ResponseEntity.ok(activity);
    }

    @PostMapping("/activities/{id}")
    public ResponseEntity<Activity> deleteActivityById(@PathVariable Long id) {
        Activity activity = this.activityRepository
                .findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException("#" + id + " activity not found")
                );
        this.activityRepository.deleteById(id);
        return ResponseEntity.ok(activity);
    }
}