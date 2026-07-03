/**
 * Bài tập 4: Tính chu vi, diện tích hình chữ nhật
 *? Input:
 *?     Nhập chiều dài (inputLength / Number)
 *?     Nhập chiều rộng (inputWidth / Number)
 *
 *TODO Process
 *TODO  Lập trình tính chu vi (diameterResult) và diện tích (areaResult) của hình chữ nhật
 *TODO  Công thức chu vi: diameterResult = (inputLength + inputWidth) * 2
 *TODO  Công thức diện tích: areaResult = inputLength * inputWidth
 *
 ** Output:
 **     Kết quả chu vi (diameterResult) và diện tích (areaResult) hình chữ nhật
 */

document
	.getElementById('btnCalcGeometric')
	.addEventListener('click', function () {
		let valWidth = document.getElementById('inputWidth').value;
		let valLength = document.getElementById('inputLength').value;

		document.getElementById('diameterResult').innerHTML =
			(Number(valWidth) + Number(valLength)) * 2;
		document.getElementById('areaResult').innerHTML = valWidth * valLength;
	});
