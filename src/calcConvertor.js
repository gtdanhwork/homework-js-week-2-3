/**
 * Bài tập 3: Quy đổi tiền
 *? Input:
 *?     Gía trị USD hiện tại là 23.500 (Mặc định / valuePerUSD / Number)
 *?     Nhập số USD (Người dùng nhập / curUSD / Number)
 *
 *TODO Process
 *TODO  Lập trình tính tổng số tiền quy đổi
 *TODO  Công thức: totalVND = curUSD * valuePerUSD
 *
 ** Output:
 **     Tổng số tiền quy đổi (totalVND / Number)
 */

document
	.getElementById('btnCalcConvert')
	.addEventListener('click', function () {
		let val = document.getElementById('inputUSD').value;

		document.getElementById('convertResult').innerHTML = val * 23500;
	});
