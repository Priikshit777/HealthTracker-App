/**
 * HealthTracker App - Health Metric Calculators & Validators
 * Associated Jira Issue: HEAL-8 (Frontend Development)
 */

export function calculateBMI(weightKg, heightCm) {
  if (weightKg <= 0 || heightCm <= 0) {
    throw new Error("Weight and height must be strictly positive values.");
  }
  const heightM = heightCm / 100;
  const bmi = weightKg / (heightM * heightM);
  return parseFloat(bmi.toFixed(1));
}

export function getBMICategory(bmi) {
  if (bmi < 18.5) return "Underweight";
  if (bmi < 25.0) return "Normal weight";
  if (bmi < 30.0) return "Overweight";
  return "Obese";
}

export function validateHeartRate(bpm) {
  if (typeof bpm !== "number" || isNaN(bpm)) return false;
  return bpm >= 30 && bpm <= 220;
}

export function calculateTargetHeartRateZones(age) {
  if (age < 10 || age > 110) {
    throw new Error("Age must be between 10 and 110.");
  }
  const maxHR = 220 - age;
  return {
    maxHeartRate: maxHR,
    fatBurn: { min: Math.round(maxHR * 0.5), max: Math.round(maxHR * 0.69) },
    cardio: { min: Math.round(maxHR * 0.7), max: Math.round(maxHR * 0.84) },
    peak: { min: Math.round(maxHR * 0.85), max: maxHR }
  };
}

export function validateDailyCaloricIntake(kcal) {
  return kcal >= 500 && kcal <= 8000;
}
