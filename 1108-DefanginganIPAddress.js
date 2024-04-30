var defangIPaddr = function (address) {
  return address.split(".").join("[.]");
};

// Example usage:
console.log(defangIPaddr("192.168.1.1")); // Output: "192[.]168[.]1[.]1"
