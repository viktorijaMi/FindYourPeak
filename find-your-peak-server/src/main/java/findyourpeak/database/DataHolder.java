package findyourpeak.database;

import findyourpeak.model.Activity;
import findyourpeak.repository.ActivityRepository;
import lombok.Getter;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.io.*;
import java.util.ArrayList;

@Component
@Getter
public class DataHolder {

    public ArrayList<Activity> activities;
    private final ActivityRepository repository;

    public DataHolder(ActivityRepository repository) {
        this.repository = repository;
    }

    @PostConstruct
    public void init() throws FileNotFoundException {

        activities = new ArrayList<>();
        File csvFile = new File("src/main/java/findyourpeak/database/csv_database_pipe.csv");
        if(!csvFile.exists()) throw new FileNotFoundException("csvFile");
        BufferedReader reader;
        try {
            reader = new BufferedReader(new FileReader(csvFile));
            reader.lines().forEach( line -> {
                if(line.split(",")[10].equals("false")){
                    return;
                }
                Activity activity = getActivityFromLine(line);
                if(activity != null) {
                    activities.add(activity);
                }
            });
            this.repository.saveAll(activities);
        } catch (FileNotFoundException e){
            System.out.println("Error parsing file. Err:" + e.getMessage());
        }
    }

    public Activity getActivityFromLine(String line) {
        String[] lineParts = line.split(",");
        if(lineParts[0].equals("Title")){
            return null;
        }
        String title = lineParts[0];
        Double latitude = Double.parseDouble(lineParts[1]);
        Double longitude = Double.parseDouble(lineParts[2]);
        String type = lineParts[3];
        String location = lineParts[4];
        String rating = lineParts[5];
        String numberReviews = lineParts[6];
        String description = lineParts[7]
                .replace("|", ",");
        String imageUrl = lineParts[9];

        return new Activity(
                title,
                latitude,
                longitude,
                type,
                description,
                location,
                rating,
                numberReviews,
                imageUrl);
    }

}
