#include <iostream>
#include <vector>
using namespace std;

void moveNumbers(vector<int>& nums) {
    int left = 0;
    int right = nums.size() - 1;

    while (left <= right) {
        if (nums[left] > 0) {
            left++;
        } else if (nums[right] <= 0) {
            right--;
        } else if (nums[left] <= 0 && nums[right] > 0) {
            swap(nums[left], nums[right]);
            left++;
            right--;
        }
    }
}

int main() {
    vector<int> nums = {6, 4, -3, 5, -2, -1, 0, 1, -9};

    moveNumbers(nums);

    for (int num : nums) {
        cout << num << " ";
    }
    cout << endl;

    return 0;
}

