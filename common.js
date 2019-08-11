function loading() {
    $('.cssload-container').addClass('active');
}
function endloading() {
    $('.cssload-container').removeClass('active');
}

function RemoveAlert() {
    $('#alert').delay(1000).slideUp(500);
}

function OpenAlert() {
    $('#alert').removeClass('hide');
    RemoveAlert();
}

check_player = function (data) {
    if (data.result == 1) {
        window.location = data.message;
    }
    else {
        endloading();
        OpenAlert();
        $('#alert').html(data.message);
    }
}
fail = function () {
    endloading();
    $('#alert').html("Hệ thống đang bận xử lý. Xin vui lòng nhập lại thông tin của bạn.");
    OpenAlert();
}