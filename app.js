$(function(){
	
	//объявляем переменные
	var $nameList = $('#nameList');
	var $surnameList = $('#surnameList');
	var $phoneList = $('#phoneList');
	var $addBtn = $('#addBtn');

	var $tbodyBook = $('#tbodyBook')
	
	//добавляем контакт в записную книгу
	$addBtn.on('click', addItemToBook);
	var $app = $('#app');

	function checkParams(event){
		var name = $nameList.val();
		var surname = $surnameList.val();
		var phone = $phoneList.val();
		if (name.length != 0 && surname.length != 0 && phone.length != 0) {
			$addBtn.removeAttr('disabled');
			$addBtn.removeClass('disabled');
		} else {
			$addBtn.attr('disabled', 'disabled');
			$addBtn.addClass('disabled');
		}
	}

	function addItemToBook(event){
		moveToBook($app.html()
			.replace('{{$nameList}}', $nameList.val())
			.replace('{{$surnameList}}', $surnameList.val())
			.replace('{{$phoneList}}', $phoneList.val())
		);
		clearList();
	}
	
	function moveToBook(item){
		$tbodyBook.append(item);
	}
	
	function clearList(){
		$nameList.val('');
		$surnameList.val('');
		$phoneList.val('');
	}

	//удаляем контакт из телефонной книги
	$tbodyBook.on('click', 'button', deleteItemBook);
	function deleteItemBook(){
		var $tr = $(this).closest('tr');
		$tr.remove();
	}
})
