/**
 * Bài tập 1: Tính tiền lương nhân viên
 *? Input:
 *?     Lương 1 ngày là 100,000 (Mặc định / Number)
 *?     Nhập số ngày làm việc (Người dùng nhập / Number)
 *
 *TODO Process
 *TODO  Lập trình tính tổng số lương nhận được
 *TODO  Công thức: Lương nhận = Lương 1 ngày * Số ngày làm việc
 *
 ** Output:
 **     Tổng lương nhận được
 */

document
	.getElementById('btnCalcDigitsSum')
	.addEventListener("click", function () {
		let val = Number(document.getElementById('inputDozenNumber').value);

		let valDozens = Math.trunc(val / 10);
		let valDigit = val % 10;

		document.getElementById('digitsSumResult').innerHTML =
			valDozens + valDigit;
	});
