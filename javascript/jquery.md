### 특정 row의 cell data 가져오기

이런식으로 하면 특정 row를 클릭했을때 해당 row의 데이터들을 불러 올 수 있다.
```
$('#table_body').on('click',".detail_row", function(){
    var row = $(this).closest("tr")[0];
    var row_data = row.cells[0].innerHTML;
});

```
