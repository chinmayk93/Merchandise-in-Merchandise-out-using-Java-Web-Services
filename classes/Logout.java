
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;


public class Logout extends HttpServlet {

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
        if(session != null) {
                session.removeAttribute("username");
                session.invalidate();
            }

        response.sendRedirect("http://jadran.sdsu.edu/jadrn022/logout.jsp");
        }
}

