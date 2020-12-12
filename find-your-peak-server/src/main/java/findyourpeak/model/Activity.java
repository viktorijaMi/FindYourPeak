package findyourpeak.model;

import findyourpeak.model.enumerator.TypeActivity;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity
@NoArgsConstructor
public class Activity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "latitude")
    private String latitude;

    @Column(name = "longitude")
    private String longitude;

    @Column(name = "type")
    @Enumerated(EnumType.STRING)
    private TypeActivity type;

    @Column(name = "description", length = 4000)
    private String description;

    @Column(name = "location")
    private String location;

    @Column(name = "rating")
    private String rating;

    @Column(name = "no_reviews")
    private String numberReviews;

    @Column(name = "imageUrl")
    private String imageUrl;

    public Activity(String title,
                    String latitude,
                    String longitude,
                    String type,
                    String description,
                    String location,
                    String rating,
                    String numberReviews,
                    String imageUrl) {
        this.title = title;
        this.latitude = latitude;
        this.longitude = longitude;
        this.description = description;
        this.location = location;
        this.rating = rating;
        this.numberReviews = numberReviews;
        this.imageUrl = imageUrl;

        switch (type) {
            case "Mountain peak" -> this.type = TypeActivity.MOUNTAIN_PEAK;
            case "Lake" -> this.type = TypeActivity.LAKE;
            case "Waterfall" -> this.type = TypeActivity.WATERFALL;
            case "Tourist attraction" -> this.type = TypeActivity.TOURIST_ATTRACTION;
            default -> this.type = null;
        }
    }

}
