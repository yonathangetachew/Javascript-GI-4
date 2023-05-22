function searchRotatedArray(nums, target) {
    const pivot = nums.indexOf(Math.min(...nums));
  
    if (nums.includes(target, pivot) || nums.includes(target, 0, pivot)) {
      return nums.indexOf(target);
    }
  
    return -1; // Target value not found
}

    let nums = [4, 5, 6, 7, 0, 1, 2];
    let target = 0;
    let result = searchRotatedArray(nums, target);
    console.log(result); // Output: 4 (index of the target value)

  