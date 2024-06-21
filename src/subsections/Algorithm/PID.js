import React from "react";
import Layout, { InlineMath, BlockMath, SyntaxHighlighter } from "../../Layout";

const content = () => {
  const codeString = `
class PID:
    def __init__(self, Kp, Ki, Kd, setpoint):
        self.Kp = Kp
        self.Ki = Ki
        self.Kd = Kd
        self.setpoint = setpoint
        self.integral = 0
        self.previous_error = 0

    def update(self, measured_value, dt):
        # Calculate error
        error = self.setpoint - measured_value
        
        # Proportional term
        P_out = self.Kp * error
        
        # Integral term
        self.integral += error * dt
        I_out = self.Ki * self.integral
        
        # Derivative term
        derivative = (error - self.previous_error) / dt
        D_out = self.Kd * derivative
        
        # Total output
        output = P_out + I_out + D_out
        
        # Save error for next iteration
        self.previous_error = error
        
        return output

# Example usage
import time

# PID controller with Kp=1.0, Ki=0.1, Kd=0.05, and setpoint=10
pid = PID(Kp=1.0, Ki=0.1, Kd=0.05, setpoint=10)

# Simulate a process variable (e.g., temperature)
measured_value = 0
dt = 0.1  # time step in seconds

for i in range(100):
    control_output = pid.update(measured_value, dt)
    # Simulate process reaction to control output (for example purposes only)
    measured_value += control_output * dt
    print(f"Time: {i*dt:.1f}s, Measured Value: {measured_value:.2f}, Control Output: {control_output:.2f}")
    time.sleep(dt)
  `;

  return (
    <Layout>
      <h2>PID Control Explanation</h2>
      <h3>Proportional-Integral-Derivative Control</h3>
      <p>
        <strong>Proportional Term (P):</strong>
      </p>
      <ul>
        <li>The proportional term produces an output value that is proportional to the current error value.</li>
        <li>The proportional response can be adjusted by multiplying the error by a constant <InlineMath math="K_p" />, known as the proportional gain.</li>
        <li>If the error is large, the control output is large, and vice versa.</li>
      </ul>
      <p>
        <strong>Integral Term (I):</strong>
      </p>
      <ul>
        <li>The integral term is concerned with the accumulation of past errors.</li>
        <li>If the error has been present for some time, the integral term will accumulate and attempt to correct the error.</li>
        <li>This term is multiplied by a constant <InlineMath math="K_i" />, the integral gain.</li>
      </ul>
      <p>
        <strong>Derivative Term (D):</strong>
      </p>
      <ul>
        <li>The derivative term predicts future error based on its rate of change.</li>
        <li>By looking at the rate of change of the error, it applies a damping effect, which reduces the overshoot.</li>
        <li>This term is multiplied by a constant <InlineMath math="K_d" />, the derivative gain.</li>
      </ul>
      <h3>PID Control Algorithm</h3>
      <p>
        The PID control algorithm can be represented as:
      </p>
      <BlockMath math="output(t) = K_p \cdot e(t) + K_i \cdot \int_0^t e(\tau) \, d\tau + K_d \cdot \frac{d e(t)}{d t}" />
      <p>where:</p>
      <ul>
        <li><InlineMath math="e(t)" /> is the error at time <InlineMath math="t" />.</li>
        <li><InlineMath math="K_p" /> is the proportional gain.</li>
        <li><InlineMath math="K_i" /> is the integral gain.</li>
        <li><InlineMath math="K_d" /> is the derivative gain.</li>
      </ul>
      <h3>Python Implementation</h3>
      <SyntaxHighlighter language="python" style={okaidia}>
        {codeString}
      </SyntaxHighlighter>
    </Layout>
  );
};

function PID() {
  return content;
}

export default PID;
