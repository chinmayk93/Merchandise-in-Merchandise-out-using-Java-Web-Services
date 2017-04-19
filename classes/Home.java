
import java.io.*;
import javax.servlet.*;
import java.util.*;
import java.text.*;
import javax.servlet.http.*;
import sdsu.*;

public class Home extends HttpServlet {

    public void doPost(HttpServletRequest request,
              HttpServletResponse response)
                        throws IOException, ServletException  {
        processRequest(request, response);
        }

    public void doGet(HttpServletRequest request,
              HttpServletResponse response)
                        throws IOException, ServletException  {
        processRequest(request, response);
        }

    private void processRequest(HttpServletRequest request,
              HttpServletResponse response) 
                        throws IOException, ServletException {
       HttpSession session = request.getSession(false);
       if(session == null) {
        ServletContext context = getServletContext();
        RequestDispatcher dispatcher
            = request.getRequestDispatcher("/WEB-INF/jsp/login_error.jsp");
        dispatcher.forward(request, response);
        }
      String sku = request.getParameter("sku");
      String info = DBConnection.getInfo(sku);
      response.getWriter().write(info);

        }
}
