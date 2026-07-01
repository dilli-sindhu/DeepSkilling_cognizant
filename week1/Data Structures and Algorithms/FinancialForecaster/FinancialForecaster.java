import java.util.*;

public class FinancialForecaster {

    private List<Double> historicalData;

    public FinancialForecaster(List<Double> historicalData) {
        this.historicalData = historicalData;
        System.out.println("FinancialForecaster initialized with " + historicalData.size() + " historical data points.");
        System.out.println("Data: " + historicalData + "\n");
    }

    // 1. Simple Moving Average forecast
    public double forecastMovingAverage(int periods) {
        System.out.println("---- Moving Average Forecast (last " + periods + " periods) ----");
        int size = historicalData.size();
        if (periods > size) periods = size;

        List<Double> recent = historicalData.subList(size - periods, size);
        double sum = 0;
        for (double val : recent) {
            sum += val;
        }
        double average = sum / periods;

        System.out.println("Using last " + periods + " values: " + recent);
        System.out.println("Sum = " + sum + ", Average = " + average);
        System.out.println("Forecasted next value: " + average + "\n");
        return average;
    }

    // 2. Linear Regression forecast (least squares method)
    public double forecastLinearRegression(int futurePeriod) {
        System.out.println("---- Linear Regression Forecast (period " + futurePeriod + ") ----");
        int n = historicalData.size();

        double sumX = 0, sumY = 0, sumXY = 0, sumX2 = 0;
        for (int i = 0; i < n; i++) {
            double x = i + 1; // time period
            double y = historicalData.get(i);
            sumX += x;
            sumY += y;
            sumXY += x * y;
            sumX2 += x * x;
        }

        // Slope (m) and intercept (b) for y = mx + b
        double m = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
        double b = (sumY - m * sumX) / n;

        double forecast = m * futurePeriod + b;

        System.out.println("Slope (m) = " + m + ", Intercept (b) = " + b);
        System.out.println("Equation: y = " + m + "x + " + b);
        System.out.println("Forecast for period " + futurePeriod + ": " + forecast + "\n");
        return forecast;
    }

    // 3. Growth Rate based forecast
    public double forecastGrowthRate(int periodsAhead) {
        System.out.println("---- Growth Rate Forecast (" + periodsAhead + " periods ahead) ----");
        int n = historicalData.size();

        double totalGrowthRate = 0;
        int count = 0;
        for (int i = 1; i < n; i++) {
            double prev = historicalData.get(i - 1);
            double curr = historicalData.get(i);
            double growth = (curr - prev) / prev;
            totalGrowthRate += growth;
            count++;
            System.out.printf("Period %d -> %d growth rate: %.4f%n", i, i + 1, growth);
        }

        double avgGrowthRate = totalGrowthRate / count;
        double lastValue = historicalData.get(n - 1);
        double forecast = lastValue * Math.pow(1 + avgGrowthRate, periodsAhead);

        System.out.println("Average growth rate: " + avgGrowthRate);
        System.out.println("Last known value: " + lastValue);
        System.out.println("Forecast after " + periodsAhead + " period(s): " + forecast + "\n");
        return forecast;
    }
}