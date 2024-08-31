// public class test {

//     public static int bS (int[] nums, int start, int end, int target) {

//         if(start<=end){
//             int mid = (start+end)/2;
//             if(nums[mid] == target){
//                 return mid;
//             }
//             else if(nums[mid] < target){
//                 return bS(nums, mid+1, end, target);
//             }
//             else {
//                 return bS(nums, 0, mid-1, target);
//             }
//         }
//         return -1;
//     }

//     public static void main(String[] args) {

//         int[] nums = new int[]{2,5};
//         int n = nums.length-1;
//         int target = 5;
//         int index = bS(nums,0,n,target);
//         System.out.println(index);
//     }
    
// }




public class test {

        public static int[] getSumAbsoluteDifferences(int[] nums) {
          final int n = nums.length;
          int[] ans = new int[n];
          int[] prefix = new int[n];
          int[] suffix = new int[n];
      
          prefix[0] = nums[0];
          for (int i = 1; i < n; ++i)
            prefix[i] = prefix[i - 1] + nums[i];
      
          suffix[n - 1] = nums[n - 1];
          for (int i = n - 2; i >= 0; --i)
            suffix[i] = suffix[i + 1] + nums[i];
      
          for (int i = 0; i < nums.length; ++i) {
            final int left = nums[i] * (i + 1) - prefix[i];
            final int right = suffix[i] - nums[i] * (n - i);
            ans[i] = left + right;
          }
      
          return ans;
        }

    public static void main(String[] args) {
        int[] nums = new int[]{2,3,4};
        getSumAbsoluteDifferences(nums);
        for(int i=0; i<nums.length; i++){
            System.out.print(nums[i]);
        }
    }
}