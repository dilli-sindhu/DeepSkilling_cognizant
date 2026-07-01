import java.util.*;

public class Main {
    public static void main(String[] args) {

        // Sample: monthly revenue data (in thousands)
        List<Double> monthlyRevenue = Arrays.asList(
                100.0, 110.0, 105.0, 120.0, 130.0, 125.0, 140.0
        );

        FinancialForecaster forecaster = new FinancialForecaster(monthlyRevenue);

        // 1. Moving Average forecast (last 3 months)
        double maForecast = forecaster.forecastMovingAverage(3);

        // 2. Linear Regression forecast (predict month 8)
        double lrForecast = forecaster.forecastLinearRegression(8);

        // 3. Growth Rate forecast (1 period ahead)
        double grForecast = forecaster.forecastGrowthRate(1);

        System.out.println("==== Summary of Forecasts for Next Month ====");
        System.out.printf("Moving Average Forecast     : %.2f%n", maForecast);
        System.out.printf("Linear Regression Forecast  : %.2f%n", lrForecast);
        System.out.printf("Growth Rate Forecast         : %.2f%n", grForecast);
    }
}