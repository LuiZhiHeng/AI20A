        
    // Form Validation
        
        var msg_invalid = "Please make sure the following fields are input correctly!\n";

        function f_invalid(msg) {
            msg_invalid += msg;
        }

        function f_check() {
            f_cal();
            alert("Form submitted successfully!");
            /*
            if (
                //student info
                document.getElementById(s_name) = "" ||
                document.getElementById(s_id) == "" ||
                document.getElementById(s_phone) == "" ||
                document.getElementById(s_email) == "" ||
                document.getElementById(r_ass) == "" ||
                document.getElementById(r_pro) == "" ||
                document.getElementById(r_test) == "" ||
                document.getElementById(r_final) == ""
            ) {
                alert("Please fill in the form completely!");
            } else {
                alert("The form has been submitted!")
            }
            */
        }
        


    // Mark Calculation
        function f_cal() {
            var mark_ass = 0, mark_pro = 0, mark_test = 0, mark_final = 0;
            var m_ass = 0, m_pro = 0, m_test = 0, m_final = 0,
            total = 0, grade = 0;

        // Get value    
            mark_ass = Number(document.forms.n_a.value);
            mark_pro = Number(document.forms.n_p.value);
            mark_test = Number(document.forms.n_t.value);
            mark_final = Number(document.forms.n_f.value);

        // Count Mark    
            m_ass = ( mark_ass / 100 ) * 10;
            m_pro = ( mark_pro / 100 ) * 30;
            m_test = ( mark_test / 100 ) * 25;
            m_final = ( mark_final / 100 ) * 35;

            total = m_ass + m_pro + m_test + m_final;
            
        // Count Grade
            if (total >= 80) grade = "A";
            else if (total >= 70) grade = "B";
            else if (total >= 50) grade = "C";
            else if (total >= 40) grade = "D";
            else grade = "F";

        // Reset  
            document.getElementById('m1_a').innerText = null;
            document.getElementById('m1_p').innerText = null;
            document.getElementById('m1_t').innerText = null;
            document.getElementById('m1_f').innerText = null;

            document.getElementById('m2_a').innerText = null;
            document.getElementById('m2_p').innerText = null;
            document.getElementById('m2_t').innerText = null;
            document.getElementById('m2_f').innerText = null;

            document.getElementById('m_t').innerText = null;
            document.getElementById('m_g').innerText = null;

        // Write 
            document.getElementById('m1_a').appendChild(document.createTextNode(mark_ass));
            document.getElementById('m1_p').appendChild(document.createTextNode(mark_pro));
            document.getElementById('m1_t').appendChild(document.createTextNode(mark_test));
            document.getElementById('m1_f').appendChild(document.createTextNode(mark_final));
            
            document.getElementById('m2_a').appendChild(document.createTextNode(m_ass));
            document.getElementById('m2_p').appendChild(document.createTextNode(m_pro));
            document.getElementById('m2_t').appendChild(document.createTextNode(m_test));
            document.getElementById('m2_f').appendChild(document.createTextNode(m_final));

            document.getElementById('m_t').appendChild(document.createTextNode(total));
            document.getElementById('m_g').appendChild(document.createTextNode(grade));

        }
