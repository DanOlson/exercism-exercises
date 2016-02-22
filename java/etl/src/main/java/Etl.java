import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.zip.Inflater;

public class Etl {
   public Map<String, Integer> transform(Map<Integer, List<String>> old) {
      final Map<String, Integer> transformed = new HashMap<String, Integer>();

      old.forEach((score, letters) -> {
         letters.forEach(letter -> {
            transformed.put(letter.toLowerCase(), score);
         });
      });

      return transformed;
   }
}
