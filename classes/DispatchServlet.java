import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;



public class DispatchServlet extends HttpServlet {
	
    public void doPost(HttpServletRequest request,
                      HttpServletResponse response)
                      throws IOException, ServletException {
                      
        HttpSession session = request.getSession(false);
        if(session == null) {// || session.getAttribute("user") == null) {
            response.sendRedirect("/jadrn022/jsp/login_error.jsp");
            return;
            }
                             
        String toDo;
	String command = request.getParameter("action");
        if(command == null)
                toDo = "/WEB-INF/jsp/login_error.jsp";
	else if(command.equals("Logout1"))
		toDo = "/WEB-INF/jsp/login_error.jsp";
	else
		toDo = "/WEB-INF/jsp/login_error.jsp";
				
	processRequest(request, response, toDo);
	}
        
    public void doGet(HttpServletRequest request,
                      HttpServletResponse response)
                      throws IOException, ServletException { 
            doPost(request, response);
            }       
	
    public void processRequest(HttpServletRequest request,
                    HttpServletResponse response, String action)
                    throws IOException, ServletException {

        RequestDispatcher dispatcher = 
            request.getServletContext().getRequestDispatcher(action); 	
	dispatcher.forward(request, response);	
        }
        
    
}




