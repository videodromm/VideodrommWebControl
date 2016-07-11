using Bridge;
using Bridge.Html5;
using Bridge.jQuery2;
using System;
using System.Threading.Tasks;

namespace VideodrommWebControl
{
    public class App
    {
        private const string KEY = "PORT";

        public static void Main()
        {
            var div = new HTMLDivElement()
            {
                ClassName = "form-inline"
            };

            var input = new HTMLInputElement()
            {
                Id = "number",
                ClassName = "form-control",
                Type = InputType.Text,
                Placeholder = "Enter the port to connect to",
                Style =
            {
                Margin = "5px"
            }
            };

            input.AddEventListener(EventType.KeyPress, InputKeyPress);

            var buttonConnect = new HTMLButtonElement()
            {
                Id = "b",
                ClassName = "btn btn-success",
                InnerHTML = "Connect"
            };

            buttonConnect.AddEventListener(EventType.Click, Connect);

            var buttonRestore = new HTMLButtonElement()
            {
                Id = "r",
                ClassName = "btn btn-danger",
                InnerHTML = "Restore saved port",
                Style =
            {
                Margin = "5px"
            }
            };

            div.AppendChild(input);
            div.AppendChild(buttonConnect);


            Document.Body.AppendChild(div);
            
            var o = Window.LocalStorage[KEY];

            if (o != null)
            {
                input.Value = o.ToString();
            }
            else
            {
                input.Value = string.Empty;
            }
            input.Focus();
        }

        private static void InputKeyPress(Event e)
        {
            // We added the listener to EventType.KeyPress so it should be a KeyboardEvent
            if (e.IsKeyboardEvent() && e.As<KeyboardEvent>().KeyCode == 13)
            {
                Connect();
            }
        }

        private static void Connect()
        {
            var input = Document.GetElementById<HTMLInputElement>("number");
            int i = Window.ParseInt(input.Value);

            if (!Window.IsNaN(i))
            {
                Window.LocalStorage.SetItem(KEY, i);
                Window.Alert(string.Format("Stored {0}", i));
                input.Value = string.Empty;
            }
            else
            {
                Window.Alert("Incorrect value. Please enter a number.");
            }
        }          
   
    }
}