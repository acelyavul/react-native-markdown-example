public class AppTest {
  @Test
  public void doScreenshot() {
    /*
     * Create and set up your view some how. This might be inflating,
     * or creating from a view class. You might want to set properties
     * on the view.
     */
    View view = mLayoutInflater.inflate(R.layout.my_layout, null, false);

    /*
     * Measure and layout the view. In this example we give an exact
     * width but all the height to be WRAP_CONTENT.
     */
    ViewHelpers.setupView(view)
        .setExactWidthDp(300)
        .layout();

    /*
     * Take the actual screenshot. At the end of this call the screenshot
     * is stored on the device, and the gradle plugin takes care of
     * pulling it and displaying it to you in nice ways.
     */
    Screenshot.snap(view)
        .record();
  }
}
