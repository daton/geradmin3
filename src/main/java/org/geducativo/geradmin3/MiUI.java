package org.geducativo.geradmin3;





//@SpringUI
//@Theme("colored") // Este ya esta ok con gradle !!
//@Theme("valo")

public class MiUI /*extends UI*/{
//VerticalLayout principal;
  //  Window subWindowExamen;
/*
    @Override
    protected void init(VaadinRequest request) {
        principal=new VerticalLayout();
        VerticalLayout layout = new VerticalLayout();
        layout.setSizeFull();


    Label label=new Label("Bienvenidos");


        setContent(layout);
        iniciar();
    }

    public void iniciar(){
          //Ventana de autenticacion
        Window ventanaAutenticar = new Window();
               ventanaAutenticar.addStyleName("perro");


        ventanaAutenticar.setClosable(false);
        ventanaAutenticar.setModal(true);
        ventanaAutenticar.setResizable(false);

        ventanaAutenticar.setHeight(320, Unit.PIXELS);
        ventanaAutenticar.setWidth(480, Unit.PIXELS);

        VerticalLayout subSuperior=new VerticalLayout();
          subSuperior.setHeight(160,Unit.PIXELS);
          subSuperior.setWidth(480,Unit.PIXELS);
         //La imagenmes deben de estar colocadas en VAADIN.themes
        ThemeResource resource = new ThemeResource("../lock.png");
         Image imagen = new Image(null, resource);
              // subSuperior.addComponent(imagen);
               subSuperior.setComponentAlignment(imagen,Alignment.MIDDLE_CENTER);



          TextField tlogin=new TextField();
          tlogin.setCaption("Usuario");

        PasswordField passwordField=new PasswordField();
        passwordField.setCaption("Contraseña");

          subSuperior.addComponent(tlogin);
          subSuperior.addComponent(passwordField);
        subSuperior.setComponentAlignment(tlogin,Alignment.MIDDLE_CENTER);
        subSuperior.setComponentAlignment(passwordField,Alignment.MIDDLE_CENTER);


          VerticalLayout subInferior=new VerticalLayout();
                         subInferior.setWidth(480,Unit.PIXELS);
                         subInferior.setHeight(30,Unit.PIXELS);


                         Button botonAutenticar=new Button("Ingresar", FontAwesome.LOCK);


        botonAutenticar.addStyleName(ValoTheme.BUTTON_PRIMARY);
                         subInferior.addComponent(botonAutenticar);
                         subInferior.setComponentAlignment(botonAutenticar, Alignment.MIDDLE_CENTER);

        VerticalLayout layoutAutenticar = new VerticalLayout();

                       layoutAutenticar.addComponent(subSuperior);
                       layoutAutenticar.addComponent(subInferior);


        ventanaAutenticar.setContent(layoutAutenticar);
        ventanaAutenticar.center();
        addWindow(ventanaAutenticar);



    }
    */
}
