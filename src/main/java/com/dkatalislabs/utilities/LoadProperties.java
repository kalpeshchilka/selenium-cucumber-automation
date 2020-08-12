package com.dkatalislabs.utilities;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

public class LoadProperties {
	/**
	 * To get the data from project.properties file
	 * 
	 * @param keyName String key for which value is needed from the project.properites
	 *            file
	 * @return returns data from the project.properites file based based on the
	 *         keyName provided
	 */
	public static String getProperties(String keyName) {
		Properties orderParams = new Properties();
		try {
			String OS = System.getProperty("os.name").toLowerCase();
			if (OS.indexOf("win") >= 0) {
				orderParams.load(new FileInputStream(new File(System.getProperty("user.dir") + "\\project.properties")));
			} else if (OS.indexOf("mac") >= 0) {
				orderParams.load(new FileInputStream(new File(System.getProperty("user.dir") + "//project.properties")));
			}
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return orderParams.getProperty(keyName);
	}
}
