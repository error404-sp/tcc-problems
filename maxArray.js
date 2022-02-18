/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    
    let max = Math.max(...nums);
    let sum = 0;
    let newArray = [];
    let pointer = nums.indexOf(max);
    
    
    if(nums[pointer+1]>nums[pointer-1] || nums[pointer-1] == undefined){
        newArray = nums.slice(pointer,nums.length)
    }
    else if(nums[pointer-1] > nums[pointer+1] || nums[pointer+1] == undefined){
        newArray = nums.slice(0, pointer+1);
        newArray = newArray.reverse();
    }
  
    for(let i = 0; i< newArray.length; i++){
        
        sum += newArray[i];
        if(sum > max){
            max = sum;
        }
    }
    
    return max;
    
}