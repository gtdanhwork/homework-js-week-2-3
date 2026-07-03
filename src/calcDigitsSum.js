/**
 * Bài tập 5: Tính tổng hai ký số
 *? Input:
 *?     Nhập số có 2 chữ số (inputNumber / Number)
 *
 *TODO Process
 *TODO  Lập trình tính tổng 2 ký số vừa nhập
 *TODO  Ví dụ 1: 12 => 1 + 2 = 3
 *TODO  Ví dụ 2: 67 => 6 + 7 = 13
 *
 ** Output:
 **     Kết quả tổng 2 ký số
 */

document
	.getElementById('btnCalcDigitsSum')
	.addEventListener('click', function () {
		let val = Number(document.getElementById('inputValue').value);

		let dozenDigit = Math.trunc(val / 10);
		let unitDigit = val % 10;

		document.getElementById('digitsSumResult').innerHTML =
			dozenDigit + unitDigit;
	});
