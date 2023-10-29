package com.example.regisfri.servlets;

import com.example.regisfri.models.CourseRepository;
import com.example.regisfri.models.Semester;
import com.example.regisfri.models.ViewSupport;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;


import java.io.IOException;
import java.util.Map;

@WebServlet(name = "CourseListServlet", value = "/course-list")
public class CourseListServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        ServletContext sc = getServletContext(); //from container application scope
        if(sc.getAttribute("semesters") == null) {
            sc.setAttribute("semesters" , Semester.getAllSemesterText());
        }
        //request.setAttribute("semesters", Semester.getAllSemesterText());
        getServletContext().getRequestDispatcher("/course_list.jsp").forward(request,response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("UTF-8");
        Map<String , String[]> parameterMap = request.getParameterMap();
        if (parameterMap.get("semester")==null) {
            doGet(request,response);
            return;
        }
        int semester = Integer.valueOf(parameterMap.get("semester")[0]);
        // request.setAttribute("semesters" , Semester.getAllSemesterText()); => don't have to request because semesters already is in application scope
        request.setAttribute("selectedSemester" , semester);
        request.setAttribute("subjects" , CourseRepository.getSubjects(semester));
        request.setAttribute("existSubjects",
                ViewSupport.getExistSubject(semester,request.getSession(false)));
        getServletContext().getRequestDispatcher("/course_list.jsp").forward(request,response);
    }
}