
function calculate(value1, value2, sign) {
  if (sign === '+') {
    return value1 + value2
  } else if (sign === '-') {
    return value1 - value2
  } else if (sign === '*') {
    return value1 * value2
  } else if (sign === '/') {
    return value1 / value2
  }
}

function update_value_by_dot(calculator_data, sign) {
  if (calculator_data.value.includes(sign)) {
    return calculator_data
  } else {
    var new_value = (calculator_data.value ? calculator_data.value  : '') + sign
    return {
      displayed_value: new_value,
      value: new_value,
      sign: calculator_data.sign,
      total: calculator_data.total
    }
  }
}

function update_by_sign(calculator_data, sign) {
  if (calculator_data.value == null) {
    return {
      displayed_value: calculator_data.displayed_value,
      value: calculator_data.displayed_value,
      sign: sign,
      total: calculator_data.total
    }
  } else if (calculator_data.total == null) {
    return {
      displayed_value: null,
      value: null,
      sign: sign,
      total: parseFloat(calculator_data.value)
    }
  } else {
    var new_total = calculate(calculator_data.total, parseFloat(calculator_data.value), calculator_data.sign)
    return {
      displayed_value: new_total,
      value: null,
      sign: sign,
      total: new_total
    }
  }
}

function equal(calculator_data) {
  if (calculator_data.total != null && calculator_data.value != null) {
    return {
      displayed_value: calculate(calculator_data.total, parseFloat(calculator_data.value), calculator_data.sign),
      value: null,
      sign: null,
      total: null
    }
  } else if (calculator_data.total == null) {
    return {
      displayed_value: parseFloat(calculator_data.value),
      value: null,
      sign: null,
      total: null
    }
  }
}

var action = {
  '/': update_by_sign,
  '*': update_by_sign,
  '-': update_by_sign,
  '+': update_by_sign,
  '=': equal,
  '.': update_value_by_dot,

}

function update_calculator_data(calculator_data, button_data) {
  var value = parseFloat(button_data)
  if (!Number.isNaN(value)) {
    var new_value = (calculator_data.value ? calculator_data.value  : '') + button_data
    return {
      displayed_value: new_value,
      value: new_value,
      sign: calculator_data.sign,
      total: calculator_data.total
    }
  } else {
    return action[button_data](calculator_data, button_data)
  }
}

export default update_calculator_data;
