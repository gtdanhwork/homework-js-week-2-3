/**
 * Bài tập 2: Tính giá trị trung bình
 *? Input:
 *?     Nhập 5 số thực x, y, z, a, b
 *
 *TODO Process
 *TODO  Lập trình tính trung bình 5 số thực
 *TODO  Công thức: avgNumber = (x + y + z + a + b)/5
 *
 ** Output:
 **     Giá trị trung bình avgNumber
 */

document.getElementById('btnAvgNumber').addEventListener('click', function () {
	let x = Number(document.getElementById('inputNumberx').value);
	let y = Number(document.getElementById('inputNumbery').value);
	let z = Number(document.getElementById('inputNumberz').value);
	let a = Number(document.getElementById('inputNumbera').value);
	let b = Number(document.getElementById('inputNumberb').value);

	let value = (x + y + z + a + b) / 5;
	document.getElementById('avgResult').innerHTML = value;
});
