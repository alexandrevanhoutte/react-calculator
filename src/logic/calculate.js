function calculate(calculator_data, button_data) {
  var value = parseInt(button_data)
  if (value != null) {
    return {
      value: (calculator_data.value ? calculator_data.value  : '') + button_data,
      sign: calculator_data.sign,
      total: calculator_data.total
    }
  }
}

export default calculate;
