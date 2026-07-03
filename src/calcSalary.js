/**
 * Bài tập 1: Tính tiền lương nhân viên
 *? Input:
 *?     Lương 1 ngày là 100,000 (inputSalary / Mặc định)
 *?     Nhập số ngày làm việc (inputDays / Number)
 *
 *TODO Process
 *TODO  Lập trình tính tổng số lương nhận được
 *TODO  Công thức: salaryResult = inputSalary * inputDays
 *
 ** Output:
 **     Tổng lương nhận được (salaryResult)
 */

document.getElementById('btnCalcSalary').addEventListener('click', function () {
	let val = Number(document.getElementById('inputDays').value);

	document.getElementById('salaryResult').innerHTML = val * 100000;
});
