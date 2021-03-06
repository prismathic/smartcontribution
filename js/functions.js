function setGeneral() {
    $('#gRow').addClass('activeBar');
}

function setMonthly() {
    let curDate = new Date();
    let curMonth = curDate.toLocaleString('default', {month: 'short'});
    let dateFromDiv = $('#dateFromDiv');
    dateFromDiv.html("<label for=\"searchForm\">Month</label><select name='month' id='month' class='form-control'><option selected>Jan</option><option>Feb</option><option>Mar</option><option>Apr</option><option>May</option><option>Jun</option><option>Jul</option><option>Aug</option><option>Sep</option><option>Oct</option><option>Nov</option><option>Dec</option></select>"
        )
    $('#dateToDiv').html("");
    $('#month').val(curMonth)
    $('.headerText').html("Month : " + curMonth)
    $('#mRow').addClass('activeBar');
    $('#totalAmount').html(myTableau.column(10).data().sum())

}

function setDaily() {
    let dateFromDiv = $('#dateFromDiv');
    let today = new Date();
    dateFromDiv.html("<label for=\"searchForm\">Choose Day</label><input required value=\""+ today.getFullYear()+'-'+("0" + (today.getMonth()+1)).slice(-2)+'-'+ today.getDate() +"\" name=\"chooseDay\" id=\"chooseDay\" class=\"form-control datepicker\" placeholder='&#128197;'/>"
        )
    $('#dateToDiv').html("");
    $('.headerText').html("Date : " + today.getFullYear()+'-'+("0" + (today.getMonth()+1)).slice(-2)+'-'+ today.getDate())
    $('#dRow').addClass('activeBar');  
    $('#totalAmount').html(myTableau.column(10).data().sum())
}

$( function() {
    $( ".datepicker" ).datepicker({
        dateFormat: "yy-mm-dd"
    });


    const myTableau = $("#dataTable").DataTable({
        processing: true,
        scrollX: false,
        // serverSide: true,
        dom: 'Bfrtip',
        buttons: [
            {extend: 'csv', 
            footer: true,
            filename: function() {
                let params = new URLSearchParams(window.location.search);
                let type = params.get('report');

                if (type == null || type == "") {
                    type = 'general';
                }

                if (type == 'general') {
                    return 'transactions_' + $('#dateFrom').val() + '_' + $('#dateTo').val() + '_' + $('.zone').text().toLowerCase();
                }
                else if (type == 'monthly') {
                    return 'transactions_' + $('#month').val() + '_' + $('.zone').text().toLowerCase();
                }
                else if (type == 'daily') {
                    return 'transactions_' + $('#chooseDay').val() + '_' + $('.zone').text().toLowerCase();
                }
        
                 
            },
            title: function() {
                let params = new URLSearchParams(window.location.search);
                let type = params.get('report');

                if (type == null || type == "") {
                    type = 'general';
                }
        
                if (type == 'general') {
                    return 'Transaction Report | From : ' + $('#dateFrom').val() + ' To : ' + $('#dateTo').val() + ' | Zone : ' + $('.zone').text() + ' | Type : ' + $('.type').text();
                }
                else if (type == 'monthly') {
                    return 'Transaction Report | Month : ' + $('#month').val() + ' | Zone : ' + $('.zone').text() + ' | Type : ' + $('.type').text();
                }
                else if (type == 'daily') {
                    return 'Transaction Report | Day : ' + $('#chooseDay').val() + ' | Zone : ' + $('.zone').text() + ' | Type : ' + $('.type').text();
                }
            }
        },
            {extend: 'excel', 
            footer: true,
            filename: function() {
                let params = new URLSearchParams(window.location.search);
                let type = params.get('report');

                if (type == null || type == "") {
                    type = 'general';
                }

                if (type == 'general') {
                    return 'transactions_' + $('#dateFrom').val() + '_' + $('#dateTo').val() + '_' + $('.zone').text().toLowerCase();
                }
                else if (type == 'monthly') {
                    return 'transactions_' + $('#month').val() + '_' + $('.zone').text().toLowerCase();
                }
                else if (type == 'daily') {
                    return 'transactions_' + $('#chooseDay').val() + '_' + $('.zone').text().toLowerCase();
                }
        
                 
            },
            title: function() {
                let params = new URLSearchParams(window.location.search);
                let type = params.get('report');

                if (type == null || type == "") {
                    type = 'general';
                }
        
                if (type == 'general') {
                    return 'Transaction Report | From : ' + $('#dateFrom').val() + ' To : ' + $('#dateTo').val() + ' | Zone : ' + $('.zone').text() + ' | Type : ' + $('.type').text();
                }
                else if (type == 'monthly') {
                    return 'Transaction Report | Month : ' + $('#month').val() + ' | Zone : ' + $('.zone').text() + ' | Type : ' + $('.type').text();
                }
                else if (type == 'daily') {
                    return 'Transaction Report | Day : ' + $('#chooseDay').val() + ' | Zone : ' + $('.zone').text() + ' | Type : ' + $('.type').text();
                }
            }
        },
            {extend: 'print', 
            footer: true,
            title: function() {
                let params = new URLSearchParams(window.location.search);
                let type = params.get('report');

                if (type == null || type == "") {
                    type = 'general';
                }
        
                if (type == 'general') {
                    return 'Transaction Report | From : ' + $('#dateFrom').val() + ' To : ' + $('#dateTo').val() + ' | Zone : ' + $('.zone').text() + ' | Type : ' + $('.type').text();
                }
                else if (type == 'monthly') {
                    return 'Transaction Report | Month : ' + $('#month').val() + ' | Zone : ' + $('.zone').text() + ' | Type : ' + $('.type').text();
                }
                else if (type == 'daily') {
                    return 'Transaction Report | Day : ' + $('#chooseDay').val() + ' | Zone : ' + $('.zone').text() + ' | Type : ' + $('.type').text();
                }
            }},
        ],
    })

    const myTableau2 = $("#dataTable2").DataTable({
        processing: true,
        scrollX: false,
        // serverSide: true,
        dom: 'Bfrtip',
        buttons: [
            {extend: 'csv', footer: true, filename: function() {return 'balance-' + $('.headerText').text().toLowerCase() + '-' + $('.zoneText').text().toLowerCase()}},
            {extend: 'excel', footer: true, filename: function() {return 'balance-' + $('.headerText').text().toLowerCase() + '-' + $('.zoneText').text().toLowerCase()}, title: function() {return "Balance Report | Zone : " + $('.zoneText').text() + " | Month : " + $('.headerText').text() }},
            {extend: 'print', footer: true}
        ],
    })

    // $(".dataTable3").DataTable({
    //     processing: true,
    //     scrollX: false,
    //     // serverSide: true,
    //     dom: 'Bfrtip',
    //     buttons: [
    //         'csv','excel','print'
    //     ],
    // })

    $('#addUserSubmit').prop('disabled',true);
    $('#conf_password').keyup(function() {
        if ($(this).val() == $('#password').val()) {
            $(this).css('border-color','green')
            if ($('#username').val() !== "") {
                $('#addUserSubmit').prop('disabled',false);
            }
        }
        else {
            $(this).css('border-color','red');
            $('#addUserSubmit').prop('disabled',true); 
        }
    })

    $('#balance_filter').click(function() {
        let bmonth = $('#month').val();
        let bzone = $('#zone').val();

        $.ajax({
            url: 'getCustomerData.php',
            method: 'GET',
            data: {
                bmonth: bmonth,
                bzone: bzone,
            },
            dataType: 'json',
            success: function(response) {
                myTableau2.clear().rows.add(response).draw();
                if (bmonth != "") {
                    $('.headerText').html(bmonth);
                }
                if (bzone != "") {
                    $('.zoneText').html(bzone)
                }
                $('#totalLoan').html(myTableau2.column(7).data().sum())
                $('#totalSavings').html(myTableau2.column(8).data().sum())
            }
        })

    }) 

    $('#transaction_filter').click(function() {
        let params = new URLSearchParams(window.location.search);
        let type = params.get('report');
        let dateFrom = $('#dateFrom').val();
        let dateTo = $('#dateTo').val();
        let zone = $('#zone').val();
        let day = $('#chooseDay').val();
        let month = $('#month').val();
        let transType = $("input[name='trans_type']:checked").val();
        if (type == null || type == "") {
            type = 'general';
        }

        if (type == 'general') {
            $.ajax({
                url: 'getCustomerData.php',
                method: 'GET',
                data: {
                    dateFrom: dateFrom,
                    dateTo: dateTo,
                    zone: zone,
                    type: transType,
                },
                dataType: 'json',
                success: function(response) {
                    console.log('general!')
                    myTableau.clear().rows.add(response).draw();
                    $('.dateFrom').html(dateFrom);
                    $('.dateTo').html(dateTo);
                    if (zone != "") {
                        $('.zone').html(zone);
                    }
                    if (transType != "") {
                        $('.type').html(transType);
                    }
                    
                    $('#totalAmount').html(myTableau.column(10).data().sum()) 
                }
            })
        }
        else if (type == 'monthly') {
            $.ajax({
                url: 'getCustomerData.php',
                method: 'GET',
                data: {
                    month: month,
                    zone: zone,
                    type: transType,
                },
                dataType: 'json',
                success: function(response) {
                    console.log('general!')
                    myTableau.clear().rows.add(response).draw();
                    if (zone != "") {
                        $('.zone').html(zone);
                    }
                    if (transType != "") {
                        $('.type').html(transType);
                    }
                    $('.headerText').html("TRANSACTION REPORT | Month : " + month);
                    $('#totalAmount').html(myTableau.column(10).data().sum()) 

                }
            })
        }
        else if (type == 'daily') {
            $.ajax({
                url: 'getCustomerData.php',
                method: 'GET',
                data: {
                    day: day,
                    zone: zone,
                    type: transType,
                },
                dataType: 'json',
                success: function(response) {
                    myTableau.clear().rows.add(response).draw();
                    if (zone != "") {
                        $('.zone').html(zone);
                    }
                    if (transType != "") {
                        $('.type').html(transType);
                    }
                    $('.headerText').html("TRANSACTION REPORT | Date : " + day);
                    $('#totalAmount').html(myTableau.column(10).data().sum()) 

                }
            })
        }
    });
  
    // getCustData();
    if ($('#custNo').val() == "") {
        $('#validator').prop('disabled', true);
        $('#reset').prop('disabled', true);
        $('#guarrantor').prop('readonly', true);
        $('.datepicker').prop('readonly', true);
        $('#viewTransactions').prop('disabled', true);
        $('.selectorValue').each(function() {
            $(this).html("<i class=\"w3-transparent\">None</i>");
        })
    }
    else {
            $.ajax({
                url: 'getCustomerData.php',
                method: 'POST',
                data: {id: $('#customerID').val()},
                success: function(response) {
                    $('#transactions').append(response);
                    
                }
            })
        
        // $.ajax({
        //     url: 'getCustomerData.php',
        //     method: 'POST',
        //     data: {custID: $('#custNo').val()},
        //     dataType: 'json',
        //     success: function(response) {
        //         if (response[0] !== 'enable') {
        //             $('#loanDiv').prepend('<h6><i>Note: You have to be registered for at least 3 months to be eligible for a loan</i></h6>');
        //             $('#validator').prop('disabled', true);
        //             $('#reset').prop('disabled', true);
        //             $('#guarrantor').prop('disabled', true);
        //             $('#loan_collect').prop('disabled', true);
        //             $('#loan_amount').prop('disabled', true);
        //             $('#loanDayNo').prop('disabled', true);
        //             $('#loan_submit').prop('disabled', true);
        //         }
        //         if (response[1] == 'noloan') {
        //             $('#loanDayNo').prop('disabled', true);
        //             $('#loan_submit').prop('disabled', true);
        //         }
        //     }
        // })
        $.ajax({
            url: 'getCustomerData.php',
            method: 'POST',
            data: {customerID: $('#customerID').val()},
            dataType: 'json',
            success: function(response) {
                let i = 0;
                $('.ajaxSelector').each(function() {
                    $(this).html('<i class=\'w3-transparent\'>'+response[i]+'</i>')
                    i++
                })
                $('#savings_rate').val(response[0]);
                $('#loan_rate').val(response[1]);
            }
        })
        $('#transactions').on('click','td>button.reverseBtn', function() {
            $(this).prop('disabled', true);
            if(confirm('Are you sure you want to reverse this transaction?')) {
                $.ajax({
                    url: 'getCustomerData.php',
                    method: 'POST',
                    data: {transactionID: this.id},
                    success: function(response) {
                        alert("Successful Transaction Reversal");
                        $('#transactions').append(response);
                    }
                })
            }
        });
        $('#savingsDayNo').change(function() {
            let srate = $('#savings_rate').val();
            let dayNo = $(this).val();

            let total = srate * dayNo;
            $('#savings_total').val(total);
        })
        $('#loanDayNo').change(function() {
            let lrate = $('#loan_rate').val();
            let dayNo = $(this).val();

            let total = lrate * dayNo;
            $('#loan_total').val(total);
        })
        // let custNo = $('#guarrantor').val()
        $("#guarrantor").keyup(function() {
            $.ajax({
            url: 'getCustomerData.php',
            method: 'POST',
            data: {
                custNo: $(this).val(),
                cardNo: $('#cardNo').val()
            },
            dataType: 'json',
            success: function(response) {
                    // let response = JSON.parse(responses)
                    $('#errorText').html(response[0]);
                    if (response[0] == "Customer Exists! Click 'Submit'") {
                        $('#errorText').css('color','green')
                        $('#validator').prop('disabled',false)
                        $('#validator').click(function() {
                            $("#guarrantor").val(response[1]);
                        })
                    }
                    else {
                        $('#validator').prop('disabled',true)
                        $('#errorText').css('color','red')
                    }
                }
            
            })
        })
        $('#edit_submit').click(function() {
            $.ajax({
                url: 'getCustomerData.php',
                method: 'POST',
                data: {
                    savings_rate: $('#newSavingsRate').val(),
                    loan_rate: $('#newLoanRate').val(),
                    id: $('#customerID').val()
                },
                success: function(response) {
                    alert(response);
                    $('#loan_rate').val($('#newLoanRate').val());
                    $('#savings_rate').val($('#newSavingsRate').val());
                }
            })
        })
        $('#viewTransactions').click(function() {
            $('#transactionsTable').css('display','block');
            window.location.hash = '#transactionsTable';
            
        })
        
        
    }
    $('#searchBtn').click(function() {
        if ($('#searchForm').val() !== "") {
            $.ajax({
                url: 'getCustomerData.php',
                method: 'GET',
                data: {searchVal: $('#searchForm').val()},
                success: function(response) {
                    $('#tableBody').html(response);
                }
            })
        }
    })
    $('#cardNoBtn').click(function() {
        $.ajax({
            url: 'getCustomerData.php',
            method: 'POST',
            data: {cardForm: $('#cardForm').val()},
            success: function(response) {
                $("#transactionBody").html(response);
            }
        })
    })
        

    

    function getCustData() {
        $.ajax({
            url: 'getCustomerData.php',
            method: 'GET',
            // data: {custNo},
            dataType: 'json',
            success: function(response) {
                let i = 0;
                $('.selectorValue').each(function() {
                    $(this).html(response[i]);
                    i++;
                })
                $('#custNo').val(custNo)
                
            }
        })
    }

    
        
    
                });