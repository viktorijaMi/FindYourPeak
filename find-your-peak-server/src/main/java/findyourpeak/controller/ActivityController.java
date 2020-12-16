package findyourpeak.controller;

import findyourpeak.model.Activity;
import findyourpeak.model.enumerator.TypeActivity;
import findyourpeak.repository.ActivityRepository;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/")
public class ActivityController {

    private final ActivityRepository activityRepository;

    public ActivityController(ActivityRepository activityRepository) {
        this.activityRepository = activityRepository;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/activities")
    public List<Activity> getAllActivities() {
        return this.activityRepository
                .findAll();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping("/activities/save/{id}")
    public ResponseEntity<Activity> addActivity(@PathVariable Long id, @RequestBody Activity act) {
        Activity activity = this.activityRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("#" + id + " activity not found"));
        activity.setTitle(act.getTitle());
        activity.setLatitude(act.getLatitude());
        activity.setLongitude(act.getLongitude());
        activity.setType(act.getType());
        activity.setDescription(act.getDescription());
        activity.setLocation(act.getLocation());
        activity.setRating(act.getRating());
        activity.setNumberReviews(act.getNumberReviews());
        activity.setImageUrl(act.getImageUrl());

        Activity updatedActivity = this.activityRepository.save(activity);
        return ResponseEntity.ok(updatedActivity);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/activities/type/{type}")
    public ResponseEntity<Activity> getActivityByType(@PathVariable String type){
        Activity activity = this.activityRepository
                .findActivityByType(TypeActivity.valueOf(type))
                .orElseThrow(() ->
                        new ResourceNotFoundException("#" + type + " activity not found"));
        return ResponseEntity.ok(activity);
    }


    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/activities/{id}")
    public ResponseEntity<Activity> getActivityById(@PathVariable Long id) {
        Activity activity = this.activityRepository
                .findById(id)
                .orElseThrow(() ->
                    new ResourceNotFoundException("#" + id + " activity not found")
                );
        return ResponseEntity.ok(activity);
    }


    @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping("/activities/delete/{id}")
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