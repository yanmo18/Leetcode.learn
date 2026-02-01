/**说明文档，编辑器会因为注释样式而识别为文档注释，所以这里用注释的方式来写说明文档。
param是JSDoc标签，用来声明函数的参数
 * @param {number[]} nums
 * {number[]}表示参数类型是数组，[]代表数组，number表示里面是数字，nums是参数名字，是函数接收的第一个参数
 * @param {number} target
 * {number}表示参数target是数字类型，这里是第二个参数
 * @return {number[]}
 * return，声明函数返回值，表示返回类型是数组，这里是返回的是一个数组
 */
// 暴力枚举，时间复杂度O(n^2)，n是数组的长度
const twoSum=function(nums,target){
    for(let i=0;i<nums.length;i++){
        // 循环从i+1开始，保证不重复
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]===target){
                return[i,j]
            }
        }
    }
    return []
    // 返回一个空数组，确保编译通过
}
// 调用函数并打印结果
const result = twoSum([2, 7, 11, 15], 9);
console.log(result); // 控制台会输出 [0, 1]

// 哈希表，时间复杂度O(n)
const twoSums=function(nums,target){
    const map={}
    // 创建一个空对象，用于存储数字和索引
    for(let i=0;i<nums.lenght;i++){
        const complement =target-nums[i]
        if(map[complemrnt]!==undefined){
            return[map[complement],i]
        }
        map[nums[i]]=i
        // 如果没有找到complement，将当前数字与索引存入map，将所有数字遍历后记录遍历过的数字和索引，快速查找
    }
    return[]
}

// 调用函数并打印结果
const result2 = twoSums([2, 7, 11, 15], 9);
console.log(result2); // 控制台会输出 [0, 1]
