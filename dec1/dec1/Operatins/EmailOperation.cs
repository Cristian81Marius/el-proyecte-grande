using FluentEmail.Smtp;
using System.Threading.Tasks;
using System.Net.Mail;
using System;

namespace dec1.Operatins
{
    static class EmailOperation
    {
        static async Task SendEmail()
        {
            try
            {
                MailMessage newMail = new MailMessage();
                // use the Gmail SMTP Host
                SmtpClient client = new SmtpClient("smtp.gmail.com");

                // Follow the RFS 5321 Email Standard
                newMail.From = new MailAddress("cry.ichimas81@gmail.com", "cry.ichimas@gmail.com");

                newMail.To.Add("cry.ichimas@gmail.com");// declare the email subject

                newMail.Subject = "My First Email"; // use HTML for the email body

                newMail.IsBodyHtml = true; newMail.Body = "<h1> This is my first Templated Email in C# </h1>";

                // enable SSL for encryption across channels
                client.EnableSsl = true;
                // Port 465 for SSL communication
                client.Port = 465;
                // Provide authentication information with Gmail SMTP server to authenticate your sender account
                client.Credentials = new System.Net.NetworkCredential("cry.ichimas@gmail.com", "<<SENDER-GMAIL-PASSWORD>>");

                client.Send(newMail); // Send the constructed mail
            }
            catch (Exception ex)
            {
            }
        }
    }
}
