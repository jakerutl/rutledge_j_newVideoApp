<?php
//get everything from a table in this reusable function!
function getAll($table) {
	include('connect.php');
	$queryAll = "SELECT * FROM {$table}";
	//whenever you have a variable you have to pass it as an argument(in the brackets of the function)
	$runAll = mysqli_query($link, $queryAll);//runs the query with the link from the database
	// echo $queryAll; //double checks we're returning the table name from index.php
	if($runAll){
		//if runall is an object then return it to index.php
		return $runAll;

	} else {
		$error = "there was a problem accessing information";
		return $error;
	}

	mysqli_close($link);
	//always clsoe the connection so no one steals your shit
	//always write this function when you have an include or require.. no sneaky bees allowed
}

//get one thing from a table on the database
function getSingle($table, $column, $id){ //order matters
	include('connect.php');
	$querySingle = "SELECT * FROM {$table} WHERE {$column} = {$id}";
	$runSingle = mysqli_query($link, $querySingle);

	if($runSingle){
		return $runSingle;

	}else{
		$error = "there was a problem accessing information";
		return $error;
	}
	mysqli_close($link);
}

function filterResults($tbl, $tbl2, $tbl3, $col, $col2, $col3, $filter){
	include('connect.php');

	$filterQuery = "SELECT * FROM {$tbl}, {$tbl2}, {$tbl3} WHERE {$tbl}.{$col} = {$tbl3}.{$col}
	AND {$tbl2}.{$col2} = {$tbl3}.{$col2} And {$tbl2}.{$col3} ='{$filter}'";
	// echo $filterQuery;
	$runQuery = mysqli_query($link, $filterQuery);
	if($runQuery){
		return $runQuery;
	}else{
		$error = "there was a problem accessing information. Sorry for the trouble.";
	}
	mysqli_close($link);
}

?>
