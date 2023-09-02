const box = document.querySelector('.box');
const boxchangeInfor = document.querySelector('.boxchangeInfor');
const submitBtn = document.getElementById('submitBtn');

// Hàm mở rộng boxchangeInfor
function expandContainer() {
    if (boxchangeInfor.style.display === 'none' || boxchangeInfor.style.display === '') {
        boxchangeInfor.style.display = 'block';
    }
}

// Hàm đóng boxchangeInfor
function closeContainer() {
    boxchangeInfor.style.display = 'none';
}

// Xử lý sự kiện khi click vào div box
box.addEventListener('click', function (event) {
    event.stopPropagation(); // Ngăn chặn sự kiện lan ra ngoài
    expandContainer();
});

// Xử lý sự kiện khi click vào nút Submit
submitBtn.addEventListener('click', function (event) {
    event.stopPropagation(); // Ngăn chặn sự kiện lan ra ngoài

    // Thực hiện xử lý submit ở đây (ví dụ: gửi dữ liệu lên máy chủ)
    // Sau khi hoàn thành xử lý, bạn có thể đóng boxchangeInfor
    closeContainer();
});

// Xử lý sự kiện click bất kì nơi ngoài boxchangeInfor
document.addEventListener('click', function () {
    closeContainer();
});

// Ngăn chặn sự kiện lan ra ngoài khi click bên trong boxchangeInfor
boxchangeInfor.addEventListener('click', function (event) {
    event.stopPropagation();
});





// Lấy tham chiếu đến các phần tử HTML cần sử dụng
const chooseFileLink = document.getElementById("chooseFile");
const fileInput = document.getElementById("fileInput");
const selectedFileName = document.getElementById("selectedFileName");

// Gắn sự kiện click cho thẻ a
chooseFileLink.addEventListener("click", function (e) {
    e.preventDefault();
    fileInput.click();
});

// Gắn sự kiện change cho input file
fileInput.addEventListener("change", function () {
    const fileName = fileInput.files[0]?.name || "No file selected";
    selectedFileName.textContent = "Selected File: " + fileName;
});

// Gắn sự kiện drag and drop cho div UploadFile
const uploadFileDiv = document.querySelector(".UploadFile");
uploadFileDiv.addEventListener("dragover", function (e) {
    e.preventDefault();
    uploadFileDiv.classList.add("drag-over");
});

uploadFileDiv.addEventListener("dragleave", function () {
    uploadFileDiv.classList.remove("drag-over");
});

uploadFileDiv.addEventListener("drop", function (e) {
    e.preventDefault();
    uploadFileDiv.classList.remove("drag-over");
    const file = e.dataTransfer.files[0];
    if (file) {
        fileInput.files = e.dataTransfer.files;
        const fileName = file.name || "No file selected";
        selectedFileName.textContent = "Selected File: " + fileName;
    }
});


////Clear data
// function updateProfile() {
//     // Lấy giá trị từ các input
//     const fullname = document.getElementById('inputFullname').value;
//     const nickname = document.getElementById('inputNickname').value;
//     const role = document.getElementById('inputRole').value;
//     const birthday = document.getElementById('inputBirthday').value;
//     const height = document.getElementById('inputHeight').value;
//     const age = document.getElementById('inputAge').value;
//     const nominations = document.getElementById('inputNominations').value;
//     const describe = document.getElementById('inputDescribe').value;

//     // Cập nhật các thông tin trong div "main"
//     document.querySelector('.main .fullname').textContent = fullname;
//     document.querySelector('.main .nickname').textContent = nickname;
//     document.querySelector('.main .p_role').textContent = role;
//     document.querySelector('.main .p_birthday').textContent = birthday;
//     document.querySelector('.main .p_height').textContent = height;
//     document.querySelector('.main .p_age').textContent = age;
//     document.querySelector('.main .p_nomibations').textContent = nominations;
//     document.querySelector('.main .p_describe').textContent = describe;


//     // Lấy giá trị từ input file
//     const fileInput = document.getElementById('fileInput');
//     const selectedFileName = document.getElementById('selectedFileName');

//     // Kiểm tra xem người dùng đã chọn tệp hình ảnh hay chưa
//     if (fileInput.files.length > 0) {
//         const selectedFile = fileInput.files[0];
//         selectedFileName.textContent = selectedFile.name;

//         // Lấy thẻ img trong div "main" và thay đổi thuộc tính src
//         const profileImage = document.querySelector('.main .image');
//         const fileReader = new FileReader();

//         fileReader.onload = function(event) {
//             profileImage.src = event.target.result;
//         };

//         fileReader.readAsDataURL(selectedFile);
//     }
// }





/////None clear data
function updateProfile() {
    // Lấy giá trị từ các input
    const fullname = document.getElementById('inputFullname').value;
    const nickname = document.getElementById('inputNickname').value;
    const role = document.getElementById('inputRole').value;
    const birthday = document.getElementById('inputBirthday').value;
    const height = document.getElementById('inputHeight').value;
    const age = document.getElementById('inputAge').value;
    const nominations = document.getElementById('inputNominations').value;
    const describe = document.getElementById('inputDescribe').value;

    // Kiểm tra xem người dùng đã chọn tệp hình ảnh hay chưa
    const fileInput = document.getElementById('fileInput');
    const selectedFileName = document.getElementById('selectedFileName');
    let selectedFile = null;

    if (fileInput.files.length > 0) {
        selectedFile = fileInput.files[0];
        selectedFileName.textContent = selectedFile.name;
    }

    // Cập nhật các thông tin trong div "main" nếu có giá trị mới, ngược lại giữ nguyên giá trị ban đầu
    const profileImage = document.querySelector('.main .image');
    const originalImageSrc = profileImage.src; // Lưu lại ảnh ban đầu

    // Cập nhật ảnh
    if (selectedFile) {
        const fileReader = new FileReader();

        fileReader.onload = function (event) {
            profileImage.src = event.target.result;
        };

        fileReader.readAsDataURL(selectedFile);
    }

    // Cập nhật các thông tin khác
    document.querySelector('.main .fullname').textContent = fullname || "Yhika Shin";
    document.querySelector('.main .nickname').textContent = nickname || "Tokisaki Nino";
    document.querySelector('.main .p_role').textContent = role || "Demigod of fallen time!";
    document.querySelector('.main .p_birthday').textContent = birthday || "November, 2nd 20**.";
    document.querySelector('.main .p_height').textContent = height || "N/A.";
    document.querySelector('.main .p_age').textContent = age || "!18?.";
    document.querySelector('.main .p_nomibations').textContent = nominations || "Maid/Yandere/Master.";
    document.querySelector('.main .p_describe').textContent = describe || "\"Welcome back! my Master!\"";

    // Nếu không có ảnh mới, giữ nguyên ảnh ban đầu
    if (!selectedFile) {
        profileImage.src = originalImageSrc;
    }
}
