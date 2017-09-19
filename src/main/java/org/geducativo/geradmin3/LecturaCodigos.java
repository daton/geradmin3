package org.geducativo.geradmin3;

import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.stereotype.Repository;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.net.URL;

@Repository
public class LecturaCodigos {

    public XSSFSheet leer(String nombre)throws Exception{
        boolean leido=false;
        XSSFSheet sheet=null;
        try{
            System.out.println("Ver la ruta"+System.getProperty("user.dir")); ;
            System.out.println(new File(".").getCanonicalPath());
            FileInputStream fileIn = null;
            FileOutputStream fileOut = null;



            URL loadedResource = this.getClass().getClassLoader().getResource(nombre);
            InputStream inputStream = loadedResource.openStream();


            XSSFWorkbook wb = new XSSFWorkbook(inputStream);

            sheet = wb.getSheetAt(0);




        }catch(Exception e){
            System.out.println("mal "+e.getMessage());

        }

        return sheet;
    }

    public XSSFSheet obtenerHoja(String archivo, int hoja)throws Exception{


        FileInputStream fileIn = null;
        FileOutputStream fileOut = null;



        URL loadedResource = this.getClass().getClassLoader().getResource(archivo);
        InputStream inputStream = loadedResource.openStream();


        XSSFWorkbook wb = new XSSFWorkbook(inputStream);

        XSSFSheet sheet = wb.getSheetAt(0);

        return sheet;
    }

}
