// Array Student 
let arrStudent = new Array();
arrStudent = [
    {
        id:'190260',
        userId : 'Homam_190260',
        userName : 'همام بكيره',
        date : '12/12/2008',
        program : 'BAIT',
        mobile : '+963-988000400',
    },
    {
        id : '190013',
        userId : 'Ahmad_190013',
        userName : 'أحمد أصلان',
        date : '12/12/2006',
        program : 'BACT',
        mobile : '+963-988012700',
    },
    {
        id : '190000' ,
        userId : 'Amaar_190000',
        userName : 'عمار عمار',
        date : '12/12/2008',
        program : 'BIS',
        mobile : '+963-987770700',
    },
    {
        id : '264590',
        userId : 'Samer_264590',
        userName : 'سامر السامر',
        date : '12/12/2006',
        program : 'BIT',
        mobile : '+963-988789700',
    }
]

// Array for storage Array Student After sorting
let ArraySorting ;

// Variable for storage Data before validating
var userId = "";
var userName = "";
var date = "";
var program = null;
var number = null;

// Function Get Program From User Face ...
function selectProgram(program){
    this.program=program;
}

// Function Get Data From User Face ...
function Getdata(userId , userName , date , number){
    this.userId = userId;
    this.userName = userName; 
    this.date = date; 
    this.number = number;

    //for Validating Values
    validatingValue();
}

function validatingValue(){
    //  -------------------------data After validating------------------------------------ 
    // this Data for Push in arrStudent After validating 
    let arrStudentId = null;
    let arrStudentUserId = null;
    let arrStudentUserName = null;
    let arrStudentDate = null;
    let arrStudentProgram = null;
    let arrStudentNumber = null;

    // --------------------- validating "UserId" ----------------------------------

    // RegExpConstructor return -> true Or false 
    let regex = new RegExp("^[a-zA-Z]+$");
    let regex1 = new RegExp("^[A-Z]+$");
    let regex2 = new RegExp("^[0-9]+$");
    // get userId 
    let userId = this.userId;
    // verification Format UserId
    let trueOrFalseUserId = userId.indexOf("_");
    let arr = new Array();
    // Convert String for array
    arr = userId.split("_");
    // clear Old error msg "UserID"
    let msgErrorUserID=document.getElementById("msg-error-userId");
    if (msgErrorUserID.children[0]!=null) {
        msgErrorUserID.removeChild(msgErrorUserID.children[0])
    }

    if(trueOrFalseUserId==-1){
        let element = document.createElement('p');
        element.className='msg-error';
        element.innerHTML=` اسم المستخدم يجب أن يكون من جزئين يفصل بينهما "_" :
        <br>
        - الجزء الأول : اسم الطالب باللغة الانكليزية و فيه المحرف الأول كبير
        <br>
        - الجزء الثاني من اسم الطالب أرقام فقط
        <br>
        - مثل : "Homam_190260" .
        `;
        let ss=document.getElementById("msg-error-userId");
        ss.append(element)
    }else if (regex.test(arr[0])==false) {
        let element = document.createElement('p');
        element.className='msg-error';
        element.innerHTML=` الجزء الأول من اسم الطالب يجب أن يكون محارف إنكليزية فقط `;
        let ss=document.getElementById("msg-error-userId");
        ss.append(element)
    }else if (regex1.test(arr[0][0])==false) {
        let element = document.createElement('p');
        element.className='msg-error';
        element.innerHTML=` يجب أن يكون المحرف الأول كبيراً في اسم الطالب`;
        let ss=document.getElementById("msg-error-userId");
        ss.append(element)
    }else if (regex2.test(arr[1])==false){
        let element = document.createElement('p');
        element.className='msg-error';
        element.innerHTML=` الجزء الثاني من اسم الطالب يجب ان يكون أرقاماً فقط`;
        let ss=document.getElementById("msg-error-userId");
        ss.append(element)
    }else{
        arrStudentId = arr[1];
        let FirstCharacter = arr[0][0];
        let RestCharacter = arr[0].slice(1,arr[0].length).toLowerCase();
        // Push Value Of data "let arrStudentUserId"
        arrStudentUserId = FirstCharacter + RestCharacter + "_" +arr[1] ;
    }

    // ----------------------- validating "UserName" ---------------------------

    // get User Name | instance Array |Convert string for Array
    let userName = this.userName;
    let arrName = new Array();
    arrName = userName.split(" ");
    // RegExpConstructor return -> true Or false 
    let regex3 = new RegExp("^[ء-ي]+$");
        // clear error msg "UserName"
        let msgErrorUserName=document.getElementById("msg-error-userName");
        if (msgErrorUserName.children[0]!=null) {
            msgErrorUserName.removeChild(msgErrorUserName.children[0])
        }

    for(let i = 0 ; i <arrName.length;i++){
        if (regex3.test(arrName[i])==false) {
            let element = document.createElement('p');
            element.className='msg-error';
            element.innerText="اسم الطالب يجب أن يكون في اللغة العربية فقط و يسمح في وجود فراغات"
            let ss=document.getElementById("msg-error-userName");
            ss.append(element)
        }
    }
    // Push Value Of data "let arrStudentUserName"
    arrStudentUserName=userName;
    
    // ----------------------------- validating "number" ----------------------------------

    // get Number | instance array | Convert String to Array
    number =this.number;
    let arrNumber =new Array();
    let trueOrFalseNumber = number.indexOf("-");
    arrNumber = number.split("-");
    // clear error msg "Number"
        let msgErrorNumber=document.getElementById("msg-error-number");
        if (msgErrorNumber.children[0]!=null) {
            msgErrorNumber.removeChild(msgErrorNumber.children[0]);
        }
    if (regex2.test(arrNumber[1])==true&&regex2.test(arrNumber[0].slice(1,arrNumber[1].length))==true){
        if (trueOrFalseNumber==-1) {
            let ss=document.getElementById("msg-error-number");
            let element = document.createElement('p');
            element.className='msg-error';
            element.innerText="رقم الموبايل يتكون من جزئين يفصل بينهما '-'";
            ss.append(element);
        }else if (arrNumber[0]==+963){
            if (arrNumber[1][0]==0) {
                let element = document.createElement('p');
                element.className='msg-error';
                element.innerText=" رقم الموبايل السوري لا يبدأ بـ 0 , يبدأ بـ 9 ";
                let ss=document.getElementById("msg-error-number");
                ss.append(element);
            }else if(arrNumber[1][0]==9){
                if(arrNumber[1].length==9) {
                    // Push Value Of data "let arrStudentNumber"
                    arrStudentNumber=number;
                }else{
                    let element = document.createElement('p');
                    element.className='msg-error';
                    element.innerText="يجب أن يكون عدد الأرقام السوري 9 أرقام دون النداء الدولي";
                    let ss=document.getElementById("msg-error-number");
                    ss.append(element);
                }
            }
        }else if(arrNumber[0]!=+963){
            if (arrNumber[1].length==7) {
                // Push Value Of data "let arrStudentNumber"
                arrStudentNumber=number;
            }else{
                let element = document.createElement('p');
                element.className='msg-error';
                element.innerText="يجب أن يكون عدد الأرقام 7 دون النداء الدولي";
                let ss=document.getElementById("msg-error-number");
                ss.append(element);
            }
        }
    }else{
        let ss=document.getElementById("msg-error-number");
        let element = document.createElement('p');
        element.className='msg-error';
        element.innerHTML=` عذراً عليك إدخال رقم الموبايل   بالإضافة إلى النداء الدولي و بدون فراغات <br>
        - يفصل بين النداء الدولي و الرقم الموبايل علامة '-'
        مثل : +963-98545565`;
        ss.append(element);
    }

    // -------------------------- validating "Date" date of Birth-----------------------------------

    // get Date | instance of Array | convert string -> Array
    date=this.date;
    let arrDate= new Array();
    arrDate = date.split("-");
    // clear error msg "date"
        let msgErrorDate=document.getElementById("msg-error-date");
        if (msgErrorDate.children[0]!=null) {
            msgErrorDate.removeChild(msgErrorDate.children[0])
        }
    
    if (arrDate[0]<=2012) {
        if (arrDate[0]>=1900&&arrDate[0]<=2022){
            if(arrDate[1]>=1 && arrDate[1]<=12)
                if(arrDate[2]>=1&&arrDate[2]<=31)
                    // Push Value Of data "let arrStudentDate" 
                    arrStudentDate=date;
        }else {
            alert("insert correcter format like'day/month/year' or '01/06/2006'")
        }
    } else {
        let element = document.createElement('p');
        element.className='msg-error';
        element.innerText="- يجب أن يكون عمر الطالب أكبر من 10 سنوات "
        let ss=document.getElementById("msg-error-date");
        ss.append(element)
    }

    // ---------------------------------- validating "Program" ------------------------------- 

        // clear error msg "date"
        let msgErrorProgram=document.getElementById("msg-error-program");
        if (msgErrorProgram.children[0]!=null) {
            msgErrorProgram.removeChild(msgErrorProgram.children[0])
        }

    if (this.program==null) {
        let element = document.createElement('p');
        element.className='msg-error';
        element.innerText="- يجب إختيار البرنامج "
        let ss=document.getElementById("msg-error-program");
        ss.append(element)
        }else{
        // Push Value Of data "let arrStudentProgram" 
        arrStudentProgram=this.program;
    }

    // ------------------------------- validating "captcha" and Push in array -------------------
    
    // get value Inputs "code Captcha"
    let inPut = document.getElementById("inPutCaptcha").value;
    if (inPut==uniquecharr) {
        if(arrStudentId!=null&&arrStudentUserId!=null&&arrStudentUserName!=null&&arrStudentDate!=null&&arrStudentProgram!=null&&arrStudentNumber!=null){
            // Push data In arrStudent
            arrStudent.push({"id":arrStudentId,"userId":arrStudentUserId,"userName":arrStudentUserName,"date":arrStudentDate,"program":arrStudentProgram,"mobile":arrStudentNumber});
            // create table of arrStudent
            CreateTable(arrStudent);
            // sorting arrStudent After Add new Student
            sortUserId()
            // msg successful
            let element = document.createElement('div');
            element.id="msg-suc";
            element.className='container-msg-success';
            element.innerHTML=`
            <p class="msg-success">تم إضافة الطالب بنجاح , لإخفاء الرسالة اضغط على زر "حسناً"</p>
            <button onclick="disNon()" class="btn-success">حسناً</button>
            `
            document.body.append(element)
            // clear everything of Data 
            arrStudentId = null;
            arrStudentUserId = null;
            arrStudentUserName = null;
            arrStudentDate = null;
            arrStudentProgram = null;
            arrStudentNumber = null;
            document.getElementsByClassName('inputData')[0].value=null;
            document.getElementsByClassName('inputData')[1].value=null;
            document.getElementsByClassName('inputData')[3].value=null;
            document.getElementsByClassName('inputData')[4].value=null;
            
            //  clear msg error
            let msgErrorCaptcha=document.getElementById("msg-error-captcha");
            if (msgErrorCaptcha.children[0]!=null) {
                msgErrorCaptcha.removeChild(msgErrorCaptcha.children[0])
            }
        }else{
            let msgErrorCaptcha=document.getElementById("msg-error-captcha");
            if (msgErrorCaptcha.children[0]!=null) {
                msgErrorCaptcha.removeChild(msgErrorCaptcha.children[0])
            }
            alert("هناك حقل/حقول يجب ادخاله/ـا")
        }
    }else{
        let msgErrorCaptcha=document.getElementById("msg-error-captcha");
        if (msgErrorCaptcha.children[0]!=null) {
            msgErrorCaptcha.removeChild(msgErrorCaptcha.children[0])
        }
        let element = document.createElement('p');
        element.className='msg-error';
        element.innerText="-رمز الكباتشا غير صحيح يرجى إعادة إدخاله"
        let ss=document.getElementById("msg-error-captcha");
        ss.append(element);
        generateCaptcha();
    }
}

// Functions Sort

// Sort Of UserId --> ID 
function sortUserId(){
    // get array student
    let arr = arrStudent ; 
    // Compare Function for sorting array 
    // return --> -1  a After b
    // return -->  1  b After a
    // return -->  0   no thing 
    arr.sort((a,b)=>{
        // get User ID and store for compare
        let userId1=a.id;
        let userId2=b.id;
        if(userId1 > userId2) return -1
        else if(userId1 < userId2) return 1
        else return 0
    });
    // create table sorting
    CreateTable(arr);
}

// Sort Of USerName --> Name
function SortUserName(){
    // get array "arrStudent"
    let arr=arrStudent;
    // Compare Function for Comare items of arry 
    // return --> -1  a After b
    // return -->  1  b After a
    // return -->  0   no thing
    arr.sort((a,b)=>{
        // get User Name and store for compare
        let userName1=a.userName;
        let userName2=b.userName;
        if(userName1<userName2) return -1
        else if (userName1>userName2) return 1
        else return 0
    });
    // create table sorting
    CreateTable(arr);
}

// Filter Of Program Selected --> Program
function filterByProgram(){  
    // get array student
    arr = arrStudent ;
    // get value Program
    let program=document.getElementById("sortOfProgram").value;
    if (program == 'ALL') {
        // for all programs
        CreateTable(arr);
    } else {
        // for one program
        arr = arr.filter(item=> item.program == program);
        // create table Of sorting Array
        CreateTable(arr);
    }
}

// Function Create Table 
function CreateTable(array) {
    let arr = array ;
    // clear old table
    let studentTable = document.getElementById("studentTable");
    if (studentTable.children[0]!=null) {
        studentTable.removeChild(studentTable.children[0])
    }

    let table = document.createElement('table');
    table.className="studentTable";
    table.innerHTML =`
    <tr class="title-table">
        <td>متسلسل</td>
        <td>اسم المستخدم</td>
        <td>اسم الطالب</td>
        <td>البرنامج</td>
    </tr>
    `
    for (let i=0 ;i <arr.length ; i++){
        if(i%2==0){
            let tr=table.insertRow()
            tr.className='row-table-double';
            tr.insertCell().appendChild(document.createTextNode(`${i+1}`));
            tr.insertCell().appendChild(document.createTextNode(`${arr[i].userId}`));
            tr.insertCell().appendChild(document.createTextNode(`${arr[i].userName}`));
            tr.insertCell().appendChild(document.createTextNode(`${arr[i].program}`));
        }else{
            let tr=table.insertRow()
            tr.className='row-table-odd';
            tr.insertCell().appendChild(document.createTextNode(`${i+1}`));
            tr.insertCell().appendChild(document.createTextNode(`${arr[i].userId}`));
            tr.insertCell().appendChild(document.createTextNode(`${arr[i].userName}`));
            tr.insertCell().appendChild(document.createTextNode(`${arr[i].program}`));
        }
    }

    studentTable.append(table)
    this.ArraySorting = array;
}
// Call Function Create Table from Start Project
CreateTable(arrStudent);

// Generate Catcha Code 
function generateCaptcha() {
    // Access the element to store
	// the generated captcha
    uniquecharr ="";
    const randomchars ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    // Generate captcha for length of
	// 5 with random character
    for (let i = 1; i < 5; i++) {
		uniquecharr += randomchars.charAt(Math.random() * randomchars.length)
	}
    // 
    let captcha = document.getElementById("Captcha");
    captcha.innerHTML=`${uniquecharr}`;
}
// Call Function for Generate Captcha from Start Project
generateCaptcha();

// Function For Remove msg Succsess
function disNon() {
    const ss= document.getElementById("msg-suc");
    ss.remove();
}

// Function For Create Text Area Content JSON Array
function CreateTextArea() {
    // get Element Text Area 
    let el = document.getElementById('text-area');
    // Condtion for Remove Old Text Area If she was been
    if (el.children[0]!=null) {
        el.removeChild(el.children[0])
    }
    // get array sorting 
    let ArraySorting = this.ArraySorting;
    // Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
    let arr = JSON.stringify(ArraySorting);
    // Create element Of TextArea 
    let element=document.createElement('textarea');
    // Set ClassName For new Element "text-area"
    element.className='text-area';
    // Insert JSON string for new Element "text-area"
    element.innerHTML=arr;
    // Insert Child for ID : #text-area
    el.append(element);
}